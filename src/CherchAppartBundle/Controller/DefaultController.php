<?php

namespace CherchAppartBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        $mesRoles = '';
        return $this->render('CherchAppartBundle:Default:index.html.twig', array('roles' => $mesRoles));
    }

}
