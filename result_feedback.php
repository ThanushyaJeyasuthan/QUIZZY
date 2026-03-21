<?php
session_start();
// connect with the databse
include 'includes/db.php'; 
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QUIZZY - Results</title>
  
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body class="d-flex flex-column min-vh-100 bg-light">
    <nav class="navbar navbar-expand-lg border-bottom sticky-top">
        <div class="container text-light">
            <div class="logo me-3">💡</div> <b>QUIZZY</b>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav fs-5 fw-medium">
                    <li class="nav-item">
                        <a class="nav-link text-light" href="index.php">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-secondary hover-primary text-light" href="category.php">Category</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active text-light" href="results.php">Results</a>
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

<main class="flex-grow-1 py-5">
    <div class="container pb-5">
        <div class="row g-4 justify-content-center">
            <div class="col-lg-6">
                <div class="card shadow-sm h-100" style="background-color: rgb(132, 205, 181);">
                    <div class="card-body p-4 p-md-5 d-flex flex-column align-items-center text-center">
                        <h1 class="mb-4" style="font-family:'Trebuchet MS', sans-serif">Quiz Results</h1>
                        
                        <div id="statusIcon" class="rounded-circle d-flex align-items-center justify-content-center border border-2 border-dark mb-4 shadow-sm" 
                             style="width: 100px; height: 100px; font-size: 3rem; background-color: white;">
                            <i class="fa-solid fa-trophy text-warning"></i>
                        </div>
                        
                        <h3 id="resultMessage" style="font-family:'Trebuchet MS', sans-serif; color: #1c2f0a;">
                            <?php echo isset($_SESSION['user_name']) ? $_SESSION['user_name'] . "," : ""; ?> Nice Job!
                        </h3>
                        
                        <div class="d-flex w-100 justify-content-center gap-4 mb-5">
                            <div class="bg-white border-0 rounded-4 px-4 py-3 shadow-sm col-5">
                                <p class="text-muted fw-bold text-uppercase mb-1">Your Score</p>
                                <h2 class="fw-bolder text-dark mb-0" id="finalScoreDisplay">0%</h2>
                            </div>
                            <div class="bg-white border-0 rounded-4 px-4 py-3 shadow-sm col-5">
                                <p class="text-muted fw-bold text-uppercase mb-1">Your Points</p>
                                <h2 class="fw-bolder text-dark mb-0" id="finalPointsDisplay">0</h2>
                            </div>
                        </div>

                        <div class="d-flex w-100 justify-content-center gap-3 mt-auto">
                            <a href="index.php" class="btn btn-secondary px-4 rounded-pill fw-bold shadow-sm custom-btn flex-grow-1" style="font-family: monospace;">Home</a>
                            <a href="category.php" class="btn btn-secondary px-4 rounded-pill fw-bold shadow-sm custom-btn flex-grow-1" style="font-family: monospace;">Another Quiz</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-5">
                <div class="card mb-4 p-4 shadow-sm border-0 rounded-4"> 
                    <h5 class="fw-bold mb-2" style="font-family:'Trebuchet MS', sans-serif; color:rgb(226, 89, 43);">
                        <i class="fa-regular fa-lightbulb text-warning me-2"></i>DID YOU KNOW?
                    </h5>
                    <div class="note-surface">
                        <p id="factDisplay" class="mb-0">Loading a fun fact...</p>
                    </div>
                </div>

                <div class="card shadow-sm border-0 rounded-4" style="background-color: #fcfcfd;">
                    <div class="card-body p-4 text-center">
                        <h4 class="fw-bold text-dark mb-2" style="font-family: 'Courier New', Courier, monospace;">Rate your experience?</h4>
                        <div class="d-flex justify-content-center gap-2 mb-3 text-warning fs-4">
                            <i class="fa-regular fa-star cursor-pointer rank-star"></i>
                            <i class="fa-regular fa-star cursor-pointer rank-star"></i>
                            <i class="fa-regular fa-star cursor-pointer rank-star"></i>
                            <i class="fa-regular fa-star cursor-pointer rank-star"></i>
                            <i class="fa-regular fa-star cursor-pointer rank-star"></i>
                        </div>
                        
                        <p class="fw-semibold text-secondary mb-2 fs-6">Is this useful for you?</p>
                        <div class="d-flex justify-content-center gap-3 mb-3 fs-5">
                            <i class="fa-regular fa-thumbs-up text-success cursor-pointer thumb-btn"></i>
                            <i class="fa-regular fa-thumbs-down text-danger cursor-pointer thumb-btn"></i>
                        </div>

                        <input type="text" id="feedbackInput" class="form-control form-control-sm rounded mb-3" placeholder="Suggestions? (Optional)">
                        <button class="btn btn-success btn-sm px-4 rounded-pill fw-bold" onclick="submitFeedback()">Submit Feedback</button>
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

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/main.js"></script>
    <script src="js/results.js"></script>
</body>
</html>