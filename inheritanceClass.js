class Employee {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getInitials() {
    return this.firstName[0] + this.lastName[0];
  }
}

class Manager extends Employee {
  constructor(firstName, lastName, department) {
    super(firstName, lastName);
    this.department = department;
  }

  sendPerformanceReview() {
    console.log(
      `Sent performance review for current quarter in ${this.department}`
    );
  }
}
