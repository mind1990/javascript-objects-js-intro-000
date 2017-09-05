var playlist = { artistName: 'songTitle' }

function updatePlaylist(playlist, artistName, songTitle) {
  var playlist = Object.assign({}, playlist, { artistName: songTitle })
  return playlist
}


function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
  return playlist

}
