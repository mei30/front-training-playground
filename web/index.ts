import { User } from "./src/models/User";
import { UserEdit } from "./src/views/UserEdit";

const user = User.buildUser({ name: "Mike", age: 31 });

const form = new UserEdit(document.getElementById("root") as Element, user);

form.render();
