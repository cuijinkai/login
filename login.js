(function() {
  var page;

  page = WinJS.UI.Pages.define('/pages/login/login.html', {
    ready: function(element, options) {
      return $('#btn_login').click(function() {
        var password, username;
        username = $('#username').val();
        password = $('#password').val();
        return $.ajax({
          url: "" + service + "/authentication",
          type: 'POST',
          contentType: 'application/json',
          data: JSON.stringify({
            _id: username,
            pwd: password
          }),
          error: function(error) {
            if (error.status === 401) {
              return Dialog.message_dialog('用户名或密码错误，请重新输入', '提示');
            }
          },
          success: function(response) {
            var url;
            window.credential = response.credential;
            url = '/pages/registration/registration.html';
            return WinJS.Navigation.navigate(url);
          }
        });
      });
    }
  });

}).call(this);
