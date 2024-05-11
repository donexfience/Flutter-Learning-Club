class User {
  String username = '';
  int age=0;
  
  User(String username, int age) {
    this.username = username;
    this.age = age;
  }
  
  void login() {
    print('user login successfully');
  }

  void logoutTime(int number) {
    print(number);
  }
}

void main() {
  User d = User('donex', 33);
  print(d.age);
  d.login();
  User d2 = User('aswin', 33);
  d2.logoutTime(500);
}
