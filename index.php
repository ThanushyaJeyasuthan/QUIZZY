<?php
session_start();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QUIZZY-Home</title>
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" >
    <link rel="stylesheet" href="css/style.css">
    
    <style>
        .carousel-img-fixed {
            width: 100%;
            height: 350px; 
            object-fit: cover; 
            border-radius: 15px;
        }
        .carousel-box {
            background: white;
            border-radius: 15px;
            overflow: hidden;
        }
        
        .navbar, footer {
            background-color: #0a192f !important;
        }
    </style>
</head>

<body class="d-flex flex-column min-vh-100 bg-light">
	
    <nav class="navbar navbar-expand-lg border-bottom sticky-top">
        <div class="container text-light">
            <div class="logo me-3">💡</div> <b>QUIZZY</b>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav fs-5 fw-medium">
                    <li class="nav-item">
                        <a class="nav-link active text-light" href="index.php">Home</a>
                    </li>
                    
                    
                        <li class="nav-item">
                            <a class="nav-link text-light" href="category.php">Category</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="result_feedback.php">Results</a>
                        </li>
			<?php if(isset($_SESSION['user_id'])): ?>
                        <li class="nav-item ms-lg-3">
                            <a href="auth/logout.php" class="btn btn-outline-light btn-sm rounded-pill px-3">Logout</a>
                        </li>
                    <?php else: ?>
                        <li class="nav-item ms-lg-3">
                            <a class="btn btn-sm btn-light rounded-pill px-4 text-dark fw-bold" href="auth/login_register.php">Login</a>
                        </li>
                    <?php endif; ?>
                </ul>
            </div>
        </div>
    </nav>

    <main class="container my-auto py-5">
        <div class="quiz-card p-4 p-md-5 shadow-sm" style="background-color: rgb(132, 205, 181); border-radius: 2rem;">
            <div class="row align-items-center g-5">
                <div class="col-lg-7">
                    <h1 class="display-3 fw-bold mb-3" style="font-family: Impact, sans-serif;">
                        Welcome <?php echo isset($_SESSION['user_name']) ? htmlspecialchars($_SESSION['user_name']) : ''; ?> to <br>
                        <span class="text-uppercase">Quizzy!</span>
                    </h1>
                    
                    <p class="lead text-secondary mb-4 fs-4">Challenge yourself in Maths, GK, and IT.</p>
                    
                    <div class="d-flex flex-wrap gap-3 mb-5">
                        <?php if(!isset($_SESSION['user_id'])): ?>
                            <a href="auth/login_register.php" class="btn btn-dark btn-lg px-5 py-2 rounded-pill shadow-sm"> Login to Start </a>
                            <a href="category.php" class="btn btn-outline-dark btn-lg px-5 py-2 rounded-pill"> Play as Guest </a>
                        <?php else: ?>
                            <a href="category.php" class="btn btn-dark btn-lg px-5 py-2 rounded-pill shadow-sm"> Choose Category </a>
                        <?php endif; ?>
                    </div>
                    
                    <div class="row g-0 text-center stats-container">
                        <div class="col-4 border-end"><h3>100+</h3><p class="small text-muted">Questions</p></div>
                        <div class="col-4 border-end"><h3>3</h3><p class="small text-muted">Categories</p></div>
                        <div class="col-4"><h3>∞</h3><p class="small text-muted">Fun</p></div>
                    </div>
                </div>

                <div class="col-lg-5">
                    <div id="quizHeroCarousel" class="carousel slide carousel-fade border rounded-4 overflow-hidden shadow" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="3000">
                                <div class="carousel-box text-center p-3">
                                    <img src="images/maths.jpg" class="carousel-img-fixed mb-3" alt="Maths">
                                    <h4 class="fw-bold mb-0">Mathematics</h4>
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="3000">
                                <div class="carousel-box text-center p-3">
                                    <img src="images/gk.jpg" class="carousel-img-fixed mb-3" alt="GK">
                                    <h4 class="fw-bold mb-0">General Knowledge</h4>
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="3000">
                                <div class="carousel-box text-center p-3">
                                    <img src="images/ICT.jpg" class="carousel-img-fixed mb-3" alt="IT">
                                    <h4 class="fw-bold mb-0">Information Technology</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <footer class="py-3 mt-auto border-top">
        <div class="container text-center">
            <small class="fw-medium text-light">Created By Thanushya Jeyasuthan © 2026. All rights reserved.</small>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/script.js"></script>
</body>
</html>
