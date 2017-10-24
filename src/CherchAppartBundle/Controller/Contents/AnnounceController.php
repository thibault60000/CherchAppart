<?php

namespace CherchAppartBundle\Controller\Contents;

use CherchAppartBundle\Entity\Announce_Informations;
use CherchAppartBundle\Form\AnnounceInformationsType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class AnnounceController extends Controller
{
    public function indexAction(Request $request)
    {
        $announce_information = new Announce_Informations();
        $form = $this->createForm(AnnounceInformationsType::class, $announce_information);

        //TODO

        $form->handleRequest($request);

        if($form->isSubmitted()){
            if($form->isValid()) {

                //TODO

                $this->get('session')->getFlashBag()
                    ->add('Announce_Message', 'Votre annonce a bien été ajoutée!');
            }
        }

        return $this->render('@CherchAppart/Announce/new.html.twig', array(
            'form' => $form->createView()
        ));
    }
}