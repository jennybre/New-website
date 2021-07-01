(function($) {

  if(!$) {
    return;
  }

  ////////////
  // Plugin //
  ////////////

  $.fn.headroom = function(option) {
    return this.each(function() {
      var $this   = $(this),
        data      = $this.data('headroom'),
        options   = typeof option === 'object' && option;

      options = $.extend(true, {}, Headroom.options, options);

      if (!data) {
        data = new Headroom(this, options);
        data.init();
        $this.data('headroom', data);
      }
      if (typeof option === 'string') {
        data[option]();

        if(option === 'destroy'){
          $this.removeData('headroom');
        }
      }
    });
  };

  //////////////
  // Data API //
  //////////////

  $('[data-headroom]').each(function() {
    var $this = $(this);
    $this.headroom($this.data());
  });

}(window.Zepto || window.jQuery));

///send mail///

	<?php
				if (!isset($_POST['submit']))
				{
				//this page should no be accessed directly. Need to submit the form.
				echo "error; you need to submit the form";
				}
				$name=$_POST['name'];
				$visitor_email=$_POST['email'];
				$message=$_POST['message'];
				
				//validate first
				if(empty ($name)||empty($visitor_email))
				{
				echo "Name and email are mandatory!";
				exit;
				}
				$email_from ='jenny.bregel@gmail.com';//put your email adress here
				$email_subject="New form submission";
				$email_body="You have received a new message from the user $name.\n".
				"email adress:$visitor_email\n".
				"Here is the message:\n $message".
				
				$to="jenny.bregel@gmail.com";//put your email adress here
				$headers="From:$email_from\r\n";
				//send the email
				mail($to,$email_subject.$email_body,$headers);
				?>