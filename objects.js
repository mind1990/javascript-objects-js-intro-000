var playlist = { LP: 'Some where I belong'}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, { [artistName]: songTitle })

}


function removeFromPlaylist(playlist, artistName) {
  return Object.delete playlist.artistName
}
