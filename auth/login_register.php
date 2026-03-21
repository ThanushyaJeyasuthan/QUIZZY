<?php
session_start();
// connect with the databse
require_once '../includes/db.php';

$error = "";
$success = "";


if (isset($_GET['error'])) {
    $error = htmlspecialchars($_GET['error']);
}
if (isset($_GET['success'])) {
    $success = htmlspecialchars($_GET['success']);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QUIZZY - Login & Register</title>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    
    <link rel="stylesheet" href="../css/style.css">
    
    <style>
        .auth-card {
            transition: transform 0.3s ease;
            border: none !important;
        }
        .auth-card:hover {
            transform: translateY(-5px);
        }
        .form-control-lg {
            font-size: 1rem;
        }
        .instruction-text {
            font-size: 0.85rem;
            color: #555;
        }
        .navbar {
            background-color: #2c3e50 !important; 
        }
    </style>
</head>

<body class="d-flex flex-column min-vh-100 bg-light">

    <nav class="navbar navbar-expand-lg border-bottom sticky-top">
        <div class="container text-light">
            <div class="logo me-3">💡</div> <b class="text-light">QUIZZY</b>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav fs-5 fw-medium">
                    <li class="nav-item">
                        <a class="nav-link text-light" href="../index.php">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="../category.php">Category</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="../result_feedback.php">Results</a>
                    </li>
			<li class="nav-item ms-lg-3">
                        <a class="btn btn-sm btn-outline-light rounded-pill px-3" href="logout.php">Logout</a>
                    </li>
                    
                    <?php if(isset($_SESSION['user_id'])): ?>
                        <li class="nav-item ms-lg-3">
                            <a class="btn btn-sm btn-outline-light rounded-pill px-3" href="logout.php">Logout</a>
                        </li>
                    <?php endif; ?>
                </ul>
            </div>
        </div>
    </nav>

    <main class="flex-grow-1 d-flex align-items-center py-5">
        <div class="container">
            
            <div class="row justify-content-center mb-4">
                <div class="col-md-10 col-lg-9">
                    <?php if($error): ?>
                        <div class="alert alert-danger alert-dismissible fade show rounded-pill px-4" role="alert">
                            <i class="fa-solid fa-circle-exclamation me-2"></i> <?php echo $error; ?>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    <?php endif; ?>
                    <?php if($success): ?>
                        <div class="alert alert-success alert-dismissible fade show rounded-pill px-4" role="alert">
                            <i class="fa-solid fa-circle-check me-2"></i> <?php echo $success; ?>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    <?php endif; ?>
                </div>
            </div>

            <div class="row g-4 justify-content-center">
                
                <div class="col-md-6 col-lg-5">
                    <div class="card shadow-sm rounded-4 h-100 auth-card" style="background-color: rgb(132, 205, 181);">
                        <div class="card-body p-4 p-md-5 d-flex flex-column">
                            <h3 class="text-center mb-1 fw-bold text-dark">Login</h3>
                            
                            <hr class="mb-4">

                            <form action="login_process.php" method="POST">
                                <div class="mb-3">
   					<label class="form-label fw-semibold small ps-2">Email Address</label>
    					<input type="email" name="user_id" class="form-control form-control-lg rounded-pill px-4" placeholder="name@example.com" required>
				</div>
                                <div class="mb-4">
                                    <label class="form-label fw-semibold small ps-2">Password</label>
                                    <input type="password" name="password" class="form-control form-control-lg rounded-pill px-4" placeholder="••••••••" required>
                                </div>
                                <button type="submit" name="login_btn" class="btn btn-dark w-100 btn-lg rounded-pill fw-bold mt-auto shadow-sm">
                                    Login <i class="fa-solid fa-right-to-bracket ms-2"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-5">
                    <div class="card shadow-sm rounded-4 h-100 auth-card" style="background-color: rgb(132, 205, 181);">
                        <div class="card-body p-4 p-md-5 d-flex flex-column">
                            <h3 class="text-center mb-1 fw-bold text-dark">Register</h3>
                            
                            <hr class="mb-4">

                            <form action="register_process.php" method="POST">
                                <div class="mb-3">
   					<label class="form-label fw-semibold small ps-2">Email Address</label>
    					<input type="email" name="email" class="form-control form-control-lg rounded-pill px-4" placeholder="name@example.com" required>
				</div>
                                <div class="mb-3">
                                    <label class="form-label fw-semibold small ps-2">Password</label>
                                    <input type="password" name="password" class="form-control form-control-lg rounded-pill px-4" placeholder="••••••••" required>
                                </div>
                                <div class="mb-4">
                                    <label class="form-label fw-semibold small ps-2">Your Name</label>
                                    <input type="text" name="reg_name" class="form-control form-control-lg rounded-pill px-4" placeholder="Your Name" required>
                                </div>
                                <button type="submit" name="register_btn" class="btn btn-dark w-100 btn-lg rounded-pill fw-bold mt-auto shadow-sm">
                                    Create Account <i class="fa-solid fa-user-plus ms-2"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </main>

    <footer class="py-3 mt-auto border-top">
        <div class="container text-center">
            <small class="fw-medium text-muted">Created By Thanushya Jeyasuthan © 2026. All rights reserved.</small>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>