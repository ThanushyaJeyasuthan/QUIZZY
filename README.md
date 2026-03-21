 **QUIZZY** 

This branch contains the final dynamic version of QUIZZY, integrating a MySQL database and PHP backend for full functionality.


**Features**
User Registration & Authentication:
  - Designed a secure registration system that captures user details.
  - Implemented Password Hashing (password_hash) to protect user credentials.
  -  Created a login system using PHP Sessions to keep users logged in while they take the quiz.

Result Storage:
  - Developed a system that captures the final score from the JavaScript quiz engine.
  - Created the logic to automatically save scores into the results table associated with the logged-in User ID
  
Feedback Management:
 - Built a dedicated feedback module where users can submit their opinions.
  - Stored all submissions in the feedback table for administrative review.


## 🛠️ Setup & Installation (XAMPP/WAMP)

### 1. How to Import the Database
1.  Open **XAMPP Control Panel** and start **Apache** and **MySQL**.
2.  Go to `http://localhost/phpmyadmin/` in your browser.
3.  Click **New** and create a database named `quizzy`.
4.  Click the **Import** tab at the top.
5.  Click **Choose File** and select the `quizzy.sql` file from this project folder.
6.  Scroll down and click **Go**.

### 2. How to Run the Project
1.  Copy the entire `QUIZZY` folder.
2.  Paste it into your server directory:
    * **XAMPP:** `C:\xampp\htdocs\`
    * **WAMP:** `C:\wamp64\www\`
3.  Open your browser and type: `http://localhost/QUIZZY/index.php`.

## 📂 New Components
* **/auth** - PHP logic for registration and login.
* **/includes** - Database connection settings (`db.php`).
* **quizzy.sql** - Full database export for easy setup.


**Author:** Thanushya Jeyasuthan  
**Course:** COM 2303  
**B.Sc. in Applied Sciences**, Rajarata University of Sri Lanka
