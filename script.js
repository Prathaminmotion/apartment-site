{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function showContent(zone) \{\
  const content = \{\
    bed: "\uc0\u55357 \u57039  This is your personal space. Maybe a dream log, comfort items, or music?",\
    laptop: "\uc0\u55357 \u56507  Encrypted Terminal \'97 enter secret codes here (coming soon).",\
    desk: "\uc0\u55357 \u56770  Here\'92s your resume, work projects, or goals.",\
    bookshelf: "\uc0\u55357 \u56538  Books, D&D lore, favorite creators or quotes.",\
    window: "\uc0\u55356 \u57095  Your vision board. Sunset dreams, goals, cities you want to live in.",\
    closet: "\uc0\u55358 \u56805  Your closet \'97 favorite fits, fashion moodboard.",\
    mirror: "\uc0\u55358 \u56990  About Me \'97 personal reflection or poetic intro.",\
    tv: "\uc0\u55357 \u56570  Watchlist. Movies, shows, creators that inspire you.",\
    drawer: "\uc0\u55357 \u56592  Secret vault \'97 hidden files, soul system, unreleased ideas."\
  \};\
\
  document.getElementById('modal-content').innerText = content[zone] || "No content found.";\
  document.getElementById('content-modal').classList.remove('hidden');\
\}\
\
function hideContent() \{\
  document.getElementById('content-modal').classList.add('hidden');\
\}\
}