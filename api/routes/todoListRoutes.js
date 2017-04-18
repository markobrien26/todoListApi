'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');
  var ssh = require('../controllers/sshController');

  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task)
    .delete(todoList.delete_all_tasks);


  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

  app.route('/ssh')
    .get(ssh.list_all_ssh)
    .post(ssh.create_a_ssh)
    .delete(ssh.delete_all_ssh);


  app.route('/ssh/:sshId')
    .get(ssh.read_a_ssh)
    .put(ssh.update_a_ssh)
    .delete(ssh.delete_a_ssh);

};
