/**
 * Created by rekhapenmetsa on 5/8/17.
 * write a program to find 2 strings are anagrams or not when compared one string with other string ,
 and return boolean value if its anagram:
 eg: s1= "silent"   s2 ="listen"
 if you shuffle characters of silent u get listen - so it is anagram - return true

 and write give different test inputs  for program.

 eg: s1= "sillnt"   s2 ="listen"
 it is not anagram - return false
 */
function anagram(s1,s2) {
    // var s1 = "silent";
    // var s2 = "listen";
    var s3="";
    var l1 = s1.length;
    var l2 = s2.length;
    //initially comparing the length of both strings before comparing characters.
    if (l1 !== l2) {
        return false;
    }
    for (var i = 0; i < s1.length; i++) {
        for (var j = 0; j < s2.length; j++) {
            if (s1[i] == s2[j]) {
               s3=s3+s2.charAt(j);
            }
        }
    }
    //console.log(s3);
    if(s3==s1) return true
    else return false
}
console.log(anagram("silent","silentbaby"));
