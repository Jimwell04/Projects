#include <iostream>

using namespace std;

int main ()
{
       cout << "Grade Average Calculator" << endl << endl;
       
       cout << "Put you're grade" << endl;
       
       int Grade [ 11 ];
      
       cout << "Filipino" << endl;
       cin >> Grade  [ 0 ];
       
       cout << "English" << endl;
       cin >> Grade [  1 ];
       
       cout << "Mathematics" << endl;
       cin >> Grade [ 2 ];
       
       cout << "Science" << endl;
       cin >> Grade [ 3 ];
       
       cout << "Aralin Panlipunan ( AP )" << endl;
       cin >> Grade [ 4 ];
       
       cout << "Edukasyon sa Pagpapakata ( ESP )"<< endl;
       cin >> Grade [ 5 ];
       
       cout << "Technology and Livelihood Education ( TLE )" << endl;
       cin >> Grade [ 6 ];
       
       cout << "MAPEH" << endl;
       
       cout << "Music" << endl;
       cin >> Grade [ 7 ];
       
       cout << "Arts" << endl;
       cin >> Grade [ 8 ];
       
       cout << "Physical Education ( PE )" << endl;
       cin >> Grade [ 9 ];
       
       cout << "Health" << endl;
       cin >> Grade [ 10 ];
             
       cout << "You're average is: " << ( Grade [ 0 ] + Grade [ 1 ] + Grade [ 2 ] + Grade [ 3 ] + Grade [ 4 ] + Grade [ 5 ] + Grade [ 6 ] + Grade [ 7 ] + Grade [ 8 ] + Grade [ 9 ] + Grade [ 10 ] ) / 11 << endl << endl;                                           
       cout << "By: Jimwell B. Ibay";
       
       return 0;
}