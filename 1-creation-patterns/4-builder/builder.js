class UserProfileBuilder {
  constructor(name) {
    this.userProfile = { name };
  }

  setAge(age) {
    this.userProfile.age = age;
    return this;
  }

  setPhone(phone) {
    this.userProfile.phone = phone;
    return this;
  }

  setAddress(address) {
    this.userProfile.address = address;
    return this;
  }

  build() {
    return this.userProfile;
  }
}

// Builder usage example
const userProfile = new UserProfileBuilder("Nikita")
  .setAge(22)
  .setPhone("0561922926")
  .setAddress("12, Business Bay, Dubai")
  .build();

console.log("Builder example", userProfile);
