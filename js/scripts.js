 $(document).ready(function()
        {
            $('#mycarousel').carousel({ interval : 1000 });

            $('#carouselButtonDo').click(function(){
               if ($('#carouselButtonDo').children("span").hasClass("fa-pause")) {
                $('#mycarousel').carousel('pause');
                $('#carouselButtonDo').children("span").removeClass('fa-pause');
                $('#carouselButtonDo').children("span").addClass('fa-play');
               }
               else if ($('#carouselButtonDo').children("span").hasClass("fa-play")) {
                $('#mycarousel').carousel("cycle");
                $("#carouselButtonDo").children("span").removeClass("fa-play");
                $("#carouselButtonDo").children("span").addClass("fa-pause");
               }
            });
            $('#navloginButton').click(function(){
                $('#loginModal').modal('show');
            });
            $('#reservetableButton').click(function(){
                $('#reservetable').modal('show');
            });
            $('#closebutton').click(function(){
                $('#reservetable').modal('hide');
            });
            $('#loginclose').click(function(){
                $('#loginModal').modal('hide');
            });
            
        });