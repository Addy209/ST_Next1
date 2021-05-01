import React from 'react'
import styles from './portfolio.module.css'
import {Bar, Doughnut,Pie} from 'react-chartjs-2'
import {Heading, Text,useMediaQuery} from '@chakra-ui/react'


const labels = ['HTML/CSS','UI Library','Javascript','ReactJS','Redux','Python','Django','REST API'];
const data = {
  labels: labels,
  datasets: [{
    label: 'Tech We Use',
    data: [100,90,90,85, 70, 80, 75, 85],
    backgroundColor: [
      'rgba(221, 77, 37, 0.2)',
      'rgba(1, 112, 254, 0.2)',
      'rgba(239, 215, 29, 0.2)',
      'rgba(94, 211, 243, 0.2)',
      'rgba(124, 65, 190, 0.2)',
      'rgba(151, 163, 121,0.2)',
      'rgba(16, 62, 46, 0.2)',
      'rgba(235, 127, 172, 0.2)'
    ],
    borderColor: [
      'rgba(221, 77, 37)',
      'rgba(1, 112, 254)',
      'rgba(239, 215, 29)',
      'rgba(94, 211, 243)',
      'rgba(124, 65, 190)',
      'rgba(151, 163, 121)',
      'rgba(16, 62, 46)',
      'rgba(235, 127, 172)'
    ],
    borderWidth: 1
  }]
};

const options={
    scales: {
      y: {
        beginAtZero: true
      }
    }
}
const Portfolio = ()=>{

  const [isLargerThan500] = useMediaQuery("(min-width: 500px)")

    return(
        <div id='3' className="margin_div">
            <Heading as='h2' size='2xl' 
            bgGradient="linear(to-r,#7928CA, #FF0080)"
            bgClip="text"
            >
                Portfolio
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan diam eget vestibulum lobortis. Curabitur non convallis risus, sed sollicitudin ante. Maecenas risus odio, faucibus et tempus et, ultricies dignissim neque. Fusce a nulla nulla. Mauris interdum sagittis sapien a ornare. Phasellus condimentum iaculis orci, auctor ultricies diam iaculis in. Donec id nunc enim.
            </Text>
            {isLargerThan500?
            <Bar data={data}  />:
            <Doughnut data={data}  />
}
        </div>)
}

export default Portfolio