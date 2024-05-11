class User {
  String username = '';
  int age=0;
  
//   User(String username, int age) {
//     this.username = username;
//     this.age = age;
//   }
  
  void login() {
    print('user login successfully');
  }

  void logoutTime(int number) {
    print(number);
  }
}
class SuperUser extends User {
    String name='donex';

}
void main() {
  User d = User();
  print(d.age);
  d.login();
  User d2 = User();
  d2.logoutTime(500);
  SuperUser d3= SuperUser();
  print(d3.name);
}
