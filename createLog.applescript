tell application "Spotify"
	set theTrack to current track
	set theID to id of theTrack
	set theName to name of theTrack
	
	set textFile to "/Users/johngeorgesample/Documents/Development/Git/Spothue/songIdLog.txt"
	
	do shell script "echo  " & quoted form of theID & " >  " & quoted form of textFile
end tell

