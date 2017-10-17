<?php

namespace CherchAppartBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class cherchAppartController extends Controller
{
    public function indexAction()
    {
        $user = $this->getUser();
        $mesRoles = '';
        foreach ($user->getRoles() as $role)
            $mesRoles .= ' '.$role;
        return $this->render('CherchAppartBundle:cherchAppart:index.html.twig', array('roles' => $mesRoles));
    }

}
