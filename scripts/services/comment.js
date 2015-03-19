'use strict';

app.factory('Comment', ['FURL', '$firebase', function(FURL, $firebase){

	var ref = new Firebase(FURL);

	var Comment = {
		comments: function(taskID){
			return $firebase(ref.child('comments').child(taskID)).$asArray();
		},

		addComment: function(taskID, comment){
			var task_comments = this.comments(taskID);
			comment.datetime = Firebase.ServerValue.TIMESTAMP;

			if(task_comments){
				return task_comments.$add(comment);
			}
		}
	};

	return Comment;
}])
