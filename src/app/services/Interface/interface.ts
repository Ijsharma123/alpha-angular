//import { domain } from 'src/environments/environment';

 const domain = 'http://localhost:3000/';

// const domain = 'http://3.140.242.2:3000/';

// Login Api http://localhost:3000/admin/showprofile/63b3dcdc0d3c5cbef162fea4

 export let signIn = domain+'admin/login';
 export let showProfile = domain+'admin/showprofile';
 export let udateProfile = domain+'admin/editprofile';
 export let changepassword = domain+'admin/changepassword';
//  User Section
 export let userList = domain+'admin/user/list';
 export let userAdd = domain+'admin/add/user';
 export let userEdit = domain+'admin/user/edit';
 export let userDelete = domain+'admin/user/delete';
//  Group Section
 export let group = domain+'admin/user/group';
//  Job Section

export let jobList = domain+'admin/job/list';
export let jobAdd= domain+'admin/job/add';
export let jobEdit= domain+'admin/job/edit';
export let jobDelete= domain+'admin/job/delete';


export let activeUser = domain+'admin/user/activeuser';
