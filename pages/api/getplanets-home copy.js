<div class="chat_container">
    <div class="chat_window">
      
        <div class='top_border' style="height:55px;">
          <table style="width:100%">
            <h3 style="margin-top: 0px;">
              <tr>
                <td align="left" style="">
                  <p><img style="width:20px; margin-right:5px;" src="{app2.chat_solid}" style="margin: 0px 10px 0px 0px"><strong>Chat - {my.chat}</strong></p>
                </td>
              </tr>
            </h3>
          </table>
        </div>
        <realtime {realtime(2, 2)}>
        <div class="chat_area">
          {!chat_messages.filter('session', _equals(my.chat, flag_check_empty = false)).order_by("id", "desc").each do |item|}
          <!-- <div style="height: 200px;">&nbsp;</div> -->
          <div>
            <div class="message_{item.user_type}">
              <h3 class="message_header_{item.user_type}">
                {item.screen_name}
              </h3>
              <p class="message_content_{item.user_type}">
                {item.message}
              </p>
            </div>
            <p class="timestamp_{item.user_type}"> {item.date}
            </p>
          </div>
          {!end}
        </div>
  
  
  
  
      </realtime>
  
  
      <div class="chat_compose">
        <div class="chat_control">
          <div class="rownew">
            <div class="columnnew">
  
  
              {_field("textarea", "message", label: "", rows: "3", required: "false")}
            </div>
            <div class="columnnew">
              <button aria-label="Chat Send Button" response-click='send' forced-action="true" class="custom-button arrow-button" onclick="

              document.getElementsByName('textarea')[0].value = '';
              document.querySelector('#message').focus();
              
              "><img alt="Arrow Button" src="{app2.arrow_up}" alt="" onload='

messageBox = document.querySelector("#message");
messageBox.focus();
 
'> </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  onload='messageBox = document.querySelector("#search_ref"); messageBox.focus()'