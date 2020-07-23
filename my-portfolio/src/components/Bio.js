import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import WifiIcon from '@material-ui/icons/Wifi';
import Timeline from './Timeline';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: blue[500],
    },
}));

export default function RecipeReviewCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <div id="Bio"> </div>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>

                        <WifiIcon />
                    </Avatar>
                }

                title="Ikram BELDJILALI"
                subheader="Developpeuse Web Front-End"
            />
           
            
            <img className='image-bio' src={require('../images/bio.jpg')} alt='ordinateur' />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                J'ai tout d'abord suivi un cursus en Langue Littérature et Civilisation Étrangère en Anglais ce qui m'a permis de travailler et
                 renforcé mon niveau d'Anglais. 
                Je me suis ensuite tourné vers le milieu de la santé et enfin j'ai décidé de me réorienter vers le milieu de la tech.
        </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Typography paragraph>
                    Mon Parcours
          </Typography>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Timeline />
                </CardContent>
            </Collapse>
        </Card>
    );
}
