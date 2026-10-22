// Builder: construct something complicated, one clear step at a time.
// Run: node index.js

class UserBuilder {
  constructor() { this.user = {}; }
  setName(name) { this.user.name = name; return this; }
  setEmail(email) { this.user.email = email; return this; }
  setPhone(phone) { this.user.phone = phone; return this; }
  setBio(bio) { this.user.bio = bio; return this; }
  build() { return this.user; }
}

const user = new UserBuilder()
  .setName("Sara")
  .setEmail("sara@example.com")
  .setBio("Loves hiking")
  .build();

console.log(user);
// { name: 'Sara', email: 'sara@example.com', bio: 'Loves hiking' }
