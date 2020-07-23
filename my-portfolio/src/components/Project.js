import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    {
        label: 'Weather Suggest -->   ce projet est une application météo qui a été réalisé en équipe avec React.JS  ',
        imgPath:
            'https://images.unsplash.com/photo-1530908295418-a12e326966ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    },
    
    {
        label: 'Freelance Lyonnais -->   un projet réalisé en React et Node.js dans le but de créer un annuaire pour Freelance Lyonnais ',
        imgPath:
            'https://skillvalue.com/blog/wp-content/uploads/2019/07/travail-en-freelance-lyon.jpg',
    },
    {
        label: 'To do Lyon -->   un premier projet réalisé en HTML et CSS sur le théme de la ville de Lyon',
        imgPath:
            'https://media.routard.com/image/87/8/lyon.1556878.c1000x300.jpg',
    },
    {
        label: 'Ordoli -->   un projet réalisé en équipe en React et avec Firebase dans le cadre dans le cadre d un partenariat avec Doctolib ',
        imgPath:
            'https://www.strategies.fr/sites/default/files/assets/images/strats-image-4018225.jpeg',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1245,
        flexGrow: 1,
        marginBottom:300,
        
        
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 100,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
        marginTop:100,
    },
    img: {
        height: 585,
        display: 'block',
        maxWidth: 1245,
        overflow: 'hidden',
        width: '100%',
    },
}));

function SwipeableTextMobileStepper() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <div className={classes.root}>
            <div id="Projet"></div>
            <Paper square elevation={0} className={classes.header}>
                <Typography>{tutorialSteps[activeStep].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {tutorialSteps.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <img className={classes.img} src={step.imgPath} alt={step.label} />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                variant="text"
                activeStep={activeStep}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        
          </Button>
                }
            />
        </div>
    );
}

export default SwipeableTextMobileStepper;
