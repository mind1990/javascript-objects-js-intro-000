var playlist = { LinkinPark: "Some where I belong"}

function updatePlaylist(artistName, songTitle) {
  Object.assign({}, playlist, { [artistName]: songTitle })
  return playlist
}


function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
  return playlist

}
