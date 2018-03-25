const routes = require('express').Router();

// importing of controllers to access function here
var userController = require('./controller/userCtrl.js')
var adminController = require('./controller/adminCtrl.js')
var fileController = require('./controller/fileCtrl.js')
var chatController = require('./controller/chatCtrl.js')
var complaintController = require('./controller/complaintCtrl.js')

///////////////// user routes ///////////////////////

/* Register User */
routes.post('/api/user/register',userController.register);

/* Login User */
routes.put('/api/user/login',userController.login);

/* Forget Password */
routes.put('/api/user/forget-password',userController.forgetPassword);

/* update user */
routes.put('/api/user/update',userController.updateUser);

/* delete User */
routes.put('/api/user/delete',userController.deleteUser);

/* Get Users list */
routes.put('/api/user/list',userController.userList);

/* Get User detail */
routes.put('/api/user/detail',userController.userDetail);

/* Get user count  */
routes.put('/api/user/count',userController.userCount);

/* Block User */
routes.put('/api/user/block',userController.blockUser);


//////////////// admin routes ////////////////////

/* Register Admin */
routes.post('/api/admin/add',adminController.addAdmin);

/* Login Admin */
routes.put('/api/admin/login',adminController.login);

/* Forget Password */
routes.put('/api/admin/forget-password',adminController.forgetPassword);

/* update admin */
routes.put('/api/admin/update',adminController.updateAdmin);

/* delete admin */
routes.put('/api/admin/delete',adminController.deleteOfficer);

/* Get admins list */
routes.put('/api/admin/list',adminController.adminList);

/* Get admin detail */
routes.put('/api/admin/detail',adminController.adminDetail);

/* upgrade officer to admin */
routes.put('/api/admin/upgrade',adminController.upgrade);

/* admin count */
routes.put('/api/admin/count',adminController.adminCount);

/* block office */
routes.put('/api/admin/block',adminController.blockOfficer);



////////////////////////// file routes ///////////////////////////

/* add file */
routes.post('/api/file/add',fileController.addFile);

/* update file */
routes.put('/api/file/update',fileController.updateFile);

/* read files with filtering options*/
routes.put('/api/file/list',fileController.fileList);

/* read file detail */
routes.put('/api/file/detail',fileController.fileDetail);

/* delete file */
routes.put('/api/file/delete',fileController.deleteFile);

/* change status*/
routes.put('/api/file/status',fileController.fileStatus);

/* file count */
routes.put('/api/file/count',fileController.fileCount);

////////////////////////// chat routes ///////////////////////////

routes.put('/api/chat/list', chatController.chatList);

routes.put('/api/chat/detail', chatController.chatDetail);

routes.post('/api/chat/add', chatController.addChat);

routes.put('/api/chat/reply', chatController.replyChat);

routes.put('/api/chat/delete', chatController.deleteChat);

////////////////////////// complaint routes ///////////////////////////

routes.put('/api/complaint', complaintController.complaintList);

routes.put('/api/complaint', complaintController.complaintDetail);

routes.post('/api/complaint', complaintController.addComplaint);

routes.put('/api/complaint', complaintController.deleteComplaint);

routes.put('/api/complaint', complaintController.complaintCount);

// department routes

// location routes



module.exports = routes;