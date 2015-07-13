templates.previewContentTpm = [
'    <div class = "preview">',
'       PREVIEW',
'    </div>',
'    <div class="previewContent hiden">',
'        <b>Full name:</b> <%= name + \' \' + lastName %>' ,
'        <div class="closeContent glyphicon glyphicon-remove"></div>',
'        <br>',
'        <b>Phone:</b> <%= phone %>',
'        <br>',
'        <b>Email:</b> <%= email %>',
'        <br>',
'        <b>Skype:</b> <%= skype %>',
'        <br>',
'        <b>Adress:</b> <%= city + \' \' + street %>',
'    </div>'
].join('');