function after_form_submitted_v2(data) 
    {
        if(data.status == 200)
        {
            $('#success_message_quote').show();
            $('#error_message_quote').hide();
            window.location.href="getaquote_thankyou.html";
        }
        else
        {
            $('#error_message_quote').append('<ul></ul>');

            jQuery.each(data.errors,function(key,val)
            {
                $('#error_message_quote ul').append('<li>'+key+':'+val+'</li>');
            });
            $('#success_message_quote').hide();
            $('#error_message_quote').show();

            //reverse the response on the button
            $('button[type="button"]', $form).each(function()
            {
                $btn = $(this);
                label = $btn.prop('orig_label');
                if(label)
                {
                    $btn.prop('type','submit' ); 
                    $btn.text(label);
                    $btn.prop('orig_label','');
                }
            });
            
        }//else
 }

$(function()
{	
    function after_form_submitted(data) 
    {
        if(data.result == 'success')
        {
            $('#success_message_quote').show();
            $('#error_message_quote').hide();
            window.location.href="getaquote_thankyou.html";
        }
        else
        {
            $('#error_message_quote').append('<ul></ul>');

            jQuery.each(data.errors,function(key,val)
            {
                $('#error_message_quote ul').append('<li>'+key+':'+val+'</li>');
            });
            $('#success_message_quote').hide();
            $('#error_message_quote').show();

            //reverse the response on the button
            $('button[type="button"]', $form).each(function()
            {
                $btn = $(this);
                label = $btn.prop('orig_label');
                if(label)
                {
                    $btn.prop('type','submit' ); 
                    $btn.text(label);
                    $btn.prop('orig_label','');
                }
            });
            
        }//else
    }

	$('#get-a-quote-contact-form-submit_ignore').submit(function(e)
      {
		alert('Someone');
        //e.preventDefault();
		debugger;
		console.log('Lets See');
        $form = $(this);
		
		// Get the values from the inputs
		var Name = $form.find('.get-a-quote-name').val();
		var email = $form.find('.get-a-quote-email').val();
		var phone_number = $form.find('.get-a-quote-phnumber').val(); 
		var subject = $form.find('.get-a-quote-subject').val();
		var dropdwon = $form.find('.contact-page-').val();
		var message = $form.find('.get-a-quote-message').val();

		// Log the values to the console
		console.log('Name: ', Name);
		console.log('email:', email);
		console.log('phone_number:', phone_number); 
		console.log('subject 3:', subject);
		console.log('dropdwon:', dropdwon);
		console.log('message:', message);
		
		 emailjs.send("service_eji7x69", "template_kerph4q", {
          "from_firstname": Name,
          "phonenumber": phone_number,
          "emailid": email,
          "subject": subject,
          "zone": dropdwon,
          "message": message
      })
      .then(function(response) {
          console.log("Email sent successfully", response);
		  after_form_submitted_v2(response);
          // alert("Your message has been sent successfully!");
      }, function(error) {
          console.error("Email sending failed", JSON.stringify(error));
          //alert("Sorry, something went wrong. Please try again later.");
      });

        //show some response on the button
        //$('button[type="submit"]', $form).each(function()
        //{
        //    $btn = $(this);
        //    $btn.prop('type','button' ); 
        //    $btn.prop('orig_label',$btn.text());
        //    $btn.text('Sending ...');
        //});

         //$.ajax({
         //       type: "POST",
         //       url: 'handler.php',
         //       data: $form.serialize(),
         //       success: after_form_submitted,
         //       dataType: 'json' 
         //});        
        
      });	
});
