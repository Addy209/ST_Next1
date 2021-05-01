import React from 'react'
import {Heading, Text} from '@chakra-ui/react'
import styles from './about.module.css'

const About=()=>{
    return(
        <div id='2' className='margin_div'>
            <Heading as='h2' size='2xl' 
            bgGradient="linear(to-r,#7928CA, #FF0080)"
            bgClip="text"
            >
                About Us
            </Heading>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor nibh a sem imperdiet rutrum. Fusce mollis ante eu turpis ornare, efficitur vehicula lorem porta. Ut vitae leo purus. In hac habitasse platea dictumst. Donec quis pulvinar metus. Mauris consequat mauris molestie dignissim convallis. In tristique sed est et pulvinar. Donec aliquet, justo et efficitur elementum, lacus libero ultricies sapien, ac scelerisque risus sapien vitae est. Nam sed sollicitudin eros. Cras et malesuada urna.</Text>

                <Text>Maecenas eu pharetra augue. Donec egestas mollis bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eget purus sollicitudin, ultricies urna a, pretium quam. Aliquam sagittis libero nec viverra scelerisque. Suspendisse at feugiat tortor. Vivamus maximus sem eget tempor feugiat. Nunc finibus, ipsum id facilisis iaculis, orci urna pulvinar orci, eget convallis lectus urna sit amet eros. In sodales est risus, sit amet dictum ligula mollis eu.</Text>

                <Text>Aenean nibh metus, congue non ipsum vitae, pharetra mattis augue. Phasellus et neque quis sapien placerat placerat. Morbi erat dui, laoreet suscipit rutrum id, ultrices nec ligula. Ut cursus, nulla sed pulvinar pharetra, orci nulla faucibus metus, elementum ullamcorper quam nisl vel tellus. Fusce ac nulla neque. Nam vehicula gravida volutpat. Ut velit sem, iaculis ac massa sed, lacinia feugiat purus. Nunc semper mi massa, eu molestie enim varius sit amet. Donec sed porta odio, ut sagittis dolor.
            </Text>

        </div>)
}

export default About