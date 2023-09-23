# converts all audio files from midnights folder into opus
i=0; for FILE in midnights/*; do i=$((i+1)); ffmpeg -i $FILE -map 0:a:0 -b:a 96k music/$i.opus; done