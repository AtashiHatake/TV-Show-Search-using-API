const comments = {
  userName: "Cbat_enjoyer",
  upVotes: 1645,
  downVoted: 32,
  hashTags: ["#funny", "#sufferingGF", "#bestsong"],
  isGuilded: false,
};

// How to access elements from objects?

// option 1 : use object_name and the square brackets and key_name in double quotes

console.log("user name is : ", comments["userName"]);

// option 2 : use object_name then a dot and key_name

console.log("up votes are : ", comments.upVotes);

// option 3 : use a variable and store the value in variable using either option 1 or option 2

let hash_tags = comments.hashTags;

console.log("hash tags used are : ", hash_tags);

// or
let downvotes = "downVoted";
console.log(comments[downvotes]);
// this checks what the variable's value is then matches that value with the object and fetches it.