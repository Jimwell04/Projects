package com.jimz.data.management;

import java.util.Scanner;

public class DataPrinting {

  public static void main(String[] args) {
  
  Scanner scan = new Scanner(System.in);
  
  String name[] = new String[2];
  String age[] = new String[2];
  String skills[] = new String[2];
  
  System.out.println("Fill-up the form below \n");
  
  System.out.print("Name: ");
  name[0] = scan.nextLine();
  
  System.out.print("Age: ");
  age[0] = scan.nextLine();
  
  System.out.print("Skills: ");
  skills[0] = scan.nextLine();  
  
  System.out.print("\n \n \n");
  
  System.out.println("_______________________________________________________________________________\n \n \n \n \n");
 
 System.out.println("Your Form Is: \n \n");
 
 System.out.print("Name: "); 
 System.out.println(name[0]);
 System.out.print("\n");
 System.out.print("Age: ");
 System.out.println(age[0]);
 System.out.print("\n");
 System.out.print("Skills: ");
 System.out.println(skills[0]);
  System.out.println(" \n \n \n \n \n_______________________________________________________________________________");
   
  }
}
