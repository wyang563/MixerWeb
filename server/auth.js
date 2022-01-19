import { auth } from "./src/components/firebase.js";

auth.onAuthStateChanged(function(user) {
  console.log(user);
});
