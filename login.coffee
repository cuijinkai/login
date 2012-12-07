page = WinJS.UI.Pages.define '/pages/login/login.html', 
  ready: (element, options) ->
    $('#btn_login').click ->
      username = $('#username').val()
      password = $('#password').val()
      $.ajax
        url: "#{service}/authentication"
        type: 'POST'
        contentType: 'application/json'
        data: JSON.stringify {_id: username, pwd: password}
        error: (error) ->
          Dialog.message_dialog '用户名或密码错误，请重新输入', '提示' if error.status is 401
        success: (response) ->
          window.credential = response.credential
          url = '/pages/registration/registration.html'
          WinJS.Navigation.navigate(url)