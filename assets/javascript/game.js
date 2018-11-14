$(document).ready(function () {
    var computerChoice = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    console.log(computerChoice);
    $("#random").html("Random Number:" + computerChoice);

    var wins = 0;
    var losses = 0;
    var score = 0;
    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: " + losses);
    $(".scoreDisplay").html(score);
    reset();

    function reset() {
        var redCrystal = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        console.log("Red Crystal: " + redCrystal);
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", "./assets/images/red.png");
        imageCrystal.attr("data-crystalvalue", redCrystal);
        $("#image-crystal").append(imageCrystal);

        var blueCrystal = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        console.log("Blue Crystal: " + blueCrystal);
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", "./assets/images/blue.png");
        imageCrystal.attr("data-crystalvalue", blueCrystal);
        $("#image-crystal").append(imageCrystal);

        var yellowCrystal = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        console.log("Yellow Crystal: " + yellowCrystal);
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", "./assets/images/yellow.png");
        imageCrystal.attr("data-crystalvalue", yellowCrystal);
        $("#image-crystal").append(imageCrystal);

        var greenCrystal = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        console.log("Green Crystal: " + greenCrystal);
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", "./assets/images/green.png");
        imageCrystal.attr("data-crystalvalue", greenCrystal);
        $("#image-crystal").append(imageCrystal);
    }

    $(document).on("click", ".crystal-image", function () {
        var crystalValue = parseInt($(this).attr("data-crystalvalue"));
        score += crystalValue;
        console.log("New Score: " + score);
        $(".scoreDisplay").html(score);
        if (score === computerChoice) {
            wins++;
            $("#wins").html("Wins: " + wins);
            computerChoice = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
            $("#random").html("Random Number:" + computerChoice);
            console.log(computerChoice);
            score = 0;
            $(".scoreDisplay").html(score);
            $('#image-crystal').empty();
            reset();
        }

        else if (score > computerChoice) {
            losses++;
            $("#losses").html("Losses: " + losses);
            computerChoice = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
            $("#random").html("Random Number:" + computerChoice);
            score = 0;
            $(".scoreDisplay").html(score);
            $('#image-crystal').empty();
            reset();
        }

    });
});