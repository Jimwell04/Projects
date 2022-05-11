#include <iostream>

using namespace std ;

int main ()
{
    cout << "Calculator \n \n" ;
    
   int NumOne , NumTwo ;
   char op ;
    
    cout << "Enter Firts Number " ;
    cin >> NumOne ;
    cout << "Enter Second Number " ;
    cin >> NumTwo ;
    cout << "Enter An Operator \n " ;
    
    cout << "\nAddition: + \n" ;
    cout << "Subtraction: - \n" ;
    cout << "Multiplication: * \n" ;
    cout << "Division: / \n" ;
    
    cout << "→" ;
    cin >> op ;
    
    switch (op){
        case '+' :
        cout << NumOne << op << NumTwo << " = " << NumOne + NumTwo << endl << endl ;
        break ;
         case '-' :
        cout << NumOne << op << NumTwo << " = " << NumOne - NumTwo << endl << endl ;
        break ;
         case '*' :
        cout << NumOne << op << NumTwo << " = " << NumOne * NumTwo << endl << endl ;
        break ;
         case '/' :
        cout << NumOne << op << NumTwo << " = " << NumOne / NumTwo << endl << endl ;
        break ;
        default :
        cout << "Invalid!" ;
        break ;
        
        cout << "BY: Jimwell B. Ibay" ;
        
    }
    return 0 ;
}    