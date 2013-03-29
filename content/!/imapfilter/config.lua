---------------
--  Options  --
---------------

options.timeout = 120
options.subscribe = true

-----------------
--  Functions  --
-----------------
function offlineimap (key)
  local status
  local value
  status, value = pipe_from('grep -A2 mail.gandi.net ~/.offlineimaprc | grep ' .. key .. '|cut -d= -f2')
  value = string.gsub(value, ' ', '')
  value = string.gsub(value, '\n', '')
  return value
end

----------------
--  Accounts  --
----------------

T = IMAP {
    server   = offlineimap('remotehost'),
    username = offlineimap('remoteuser'),
    password = offlineimap('remotepass'),

    ssl = 'ssl3',
    port = 993,
}

----------------
-- The Pulse: --
-- Emails for --
--  modeling  --
----------------
pulse = (
    T.INBOX:contain_from('facebookmail.com') +
    T.INBOX:contain_from('twitter.com') +
    T.INBOX:contain_from('voice.google.com') +
    T.INBOX:contain_from('postmaster.twitter.com') +
    T.INBOX:contain_from('linkedin.com') + T.INBOX:contain_field('Reply-To', 'reply.linkedin.com') +
    T.INBOX:contain_from('voice-noreply@google.com') +
    T.INBOX:contain_from('plus.google.com') +
    -- ...
    T.INBOX:contain_from('github.com')
)
pulse:move_messages(T.Pulse)

spam = (
    T.INBOX:contain_from('FattorossTedCEO@aol.com') +
    T.INBOX:contain_subject('PMX:#')
)
spam:move_messages(T.Spam)
