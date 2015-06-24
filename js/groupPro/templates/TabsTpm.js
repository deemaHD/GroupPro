templates.tabsTpm = [
'        <ul>',
'            <li class="button"> Full name </li>',
'            <li class="button"> Contacts </li>',
'            <li class="button"> Adress </li>',
'        </ul>',
'        <div class="content">',
'            <p class="tab">',
'                <%= name %> <%= lastName %>',
'            </p>',
'            <p class="tab hiden">',
'                <%= phone %> <br> <%= email %> <br> <%= skype %>',
'            </p>',
'            <p class="tab hiden">',
'                <%= city %> <%= street %>',
'            </p>',
'        </div>'
].join('');