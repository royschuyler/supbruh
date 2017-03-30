const leeka = {
  myNear: () => {
    console.log('leeka')
    setTimeout(() => {
      console.log('myNear')
    }, 3000)
  }
}

const { myNear } = leeka

myNear()
