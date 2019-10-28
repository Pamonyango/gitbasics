function remove_first_last_chars(str) {
 let str_arr = str.split(',');
 let f_l_chars = str_arr.filter((e,i)=>) {
   (i===0) || i===str_arr.length - 1  
 }
}
