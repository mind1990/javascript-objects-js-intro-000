var playlist = { artistName: 'songTitle' }

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign(playlist, { [artistName]: songTitle })
  return playlist
}


function removeFromPlaylist(playlist, artistName) {
  
  delete playlist.Slowdrive
  return playlist

}
