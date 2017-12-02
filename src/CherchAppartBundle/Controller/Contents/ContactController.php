<?php

namespace CherchAppartBundle\Controller\Contents;

use CherchAppartBundle\Form\ContactType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use CherchAppartBundle\Entity\Contact;
use Symfony\Component\HttpFoundation\Request;

class ContactController extends Controller
{
    public function indexAction(Request $request)
    {
        $contact = new Contact();
        $form = $this->createForm(ContactType::class, $contact);

        $form->handleRequest($request);

        if($form->isSubmitted()){
            if($form->isValid()) {
                $message = \Swift_Message::newInstance()
                    ->setSubject('Contact depuis CherchAppart')
                    ->setFrom('cherchappartnoreply@gmail.com')
                    ->setTo($this->container->getParameter('mailer_user'))
                    ->setBody($this->renderView('@CherchAppart/Contact/email.txt.twig', array('contact' => $contact)));
                $this->get('mailer')->send($message);

                $this->get('session')->getFlashBag()
                    ->add('Contact-Message', 'Message envoyé avec succés, nous vous répondrons dans les plus brefs délais!');
            }
        }

        return $this->render('@CherchAppart/Contact/contact.html.twig', array(
            'form' => $form->createView()
        ));
    }
}