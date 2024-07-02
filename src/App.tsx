import { useTheme } from '@mui/material/styles';

import { Box } from '@mui/material';
import './index.css';






function App() {
  const theme = useTheme();

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Box sx={{
        fontSize: 100,
        textAlign: "center",
        flexDirection: 'column',
        padding: 4,

        [theme.breakpoints.up('sm')]: {
          textAlign: "left",
        },
      }} >Title</Box>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: 1,
        [theme.breakpoints.up('sm')]: {
          flexDirection: 'row',
          padding: 2,
        },
      }}>
        <Box sx={{
          flex: 1,
          }}>

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula orci, viverra eu lorem in, vestibulum suscipit ligula. Cras maximus feugiat lorem, eu pellentesque sapien bibendum vitae. Phasellus nec dui euismod, porttitor mauris sed, consequat sem. Nulla malesuada ante vitae dolor faucibus imperdiet eget hendrerit augue. Nullam tincidunt risus vel justo porttitor, congue interdum justo semper. Ut a dolor nulla. Aliquam mattis urna non ultricies finibus.
          Nulla accumsan tincidunt lacus, quis blandit metus faucibus sed. Vestibulum nisl dolor, ultricies at tristique ac, hendrerit id felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed placerat rhoncus elit non pellentesque. Proin hendrerit neque non felis tincidunt ornare. Nunc mollis sed arcu sed iaculis. Pellentesque leo ligula, sagittis condimentum interdum eu, mollis sed augue. Aliquam et urna felis. Nullam porttitor ex nunc, ac rhoncus quam mollis ac. Aenean vitae vulputate orci. Suspendisse potenti. Etiam efficitur arcu sed libero gravida, nec gravida augue commodo. Praesent id ornare risus. Maecenas quis ullamcorper sem.
          Morbi euismod ut metus non pulvinar. Phasellus ex risus, ullamcorper id eros at, placerat lacinia purus. Praesent euismod magna at malesuada feugiat. Sed ac volutpat lacus. Phasellus auctor molestie turpis vel pulvinar. Nunc a velit ac felis tempor luctus bibendum ac tortor. Suspendisse ullamcorper, odio sed scelerisque aliquet, arcu sapien molestie felis, quis suscipit lorem nisi sit amet mi. Suspendisse vitae nulla tortor.
        </Box>
        <Box sx={{
          width: "100%",
          [theme.breakpoints.up('sm')]: {
            width: "200px",
          },
          
        }}>
          <Box
           component="img" 
            sx={{
              width: '100%',
              aspectRatio: '1272/764',
              padding: 2
            }}           
           src="https://recipesblob.oetker.co.uk/assets/fbfb80373ef74e1d92abb3f481df41ab/1272x764/bubble-waffeln_qf-12206.webp"
           ></Box>

        </Box>

      </Box>

    </Box>
  )
}

export default App
