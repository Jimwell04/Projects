#include <iostream>

using namespace std ;

int main ()
{
	/*   
	 if ( Failed == TryAgain ){
         TryAgain = Success
    } 
    */
    
    //String Data Types
    string moto = "    if ( Failed == TryAgain ){ \n        TryAgain = Success \n    }" ;
    string Failed ;
    string TryAgain ;
    string Success ;
    string NotSuccess = "No" ;
    
    //Title
    cout << "           ==Life Moto==" << endl << endl ;    
    cout << moto << endl << endl ;
    cout << "=================================================== \n \n";
    
    // Yes or No
    cout << "Yes or No?" << endl << endl ;
    
    //Inputs and Outputs
    cout << "Failed: " ;
    cin >> Failed ;
    
    cout << endl << endl ;
    
    cout << "TryAgain: " ;
    cin >> TryAgain ;
   
   //If Yes or No is Valid
 if ( Failed == "Yes" || Failed == "yes" || Failed == "No" || Failed == "no" && TryAgain == "Yes" || TryAgain == "yes" || TryAgain == "No" || TryAgain == "no" ){
    
    //If Failed == TryAgain
    if ( Failed == TryAgain ){
        Success = TryAgain ;
    } else {
        Success = NotSuccess ;
    }
    
    cout << endl << endl ;
    
    //If Success == TryAgain
    if ( Success == TryAgain ){
        cout << "Success: " << Success ;
    }else {
        cout << "Success: " << NotSuccess ;
    }
   } 
  
    //If Yes or No is Invalid
 else {
       cout << " \n \n Invalid Make Sure Your Awnser Is Yes or No" ;
   }
    cout << endl << endl ;
    
    //Reprint
    cout << "===================== \n" ;
    cout << "Failed: " << Failed << endl ;
    cout << "TryAgain: " << TryAgain << endl ;    cout << "Success: " << Success << endl ;
    cout << "===================== \n" ;
    
    cout << endl ;
    
    //BY: Jimwell B. Ibay
    cout << "BY: Jimwell B. Ibay" ;
                            
	return 0 ;
}