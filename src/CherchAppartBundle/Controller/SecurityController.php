<?php

namespace CherchAppartBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Security\Core\SecurityContext;

/**
 * Security controller.
 *
 */
class SecurityController extends Controller
{
    public function loginAction()
    {
        if ($this->container->get('security.authorization_checker')->isGranted('ROLE_ADMINISTRATEUR'))
        {
            $this->redirectToRoute('home');
        }

        $auth= $this->get('security.authentication_utils');
        $error= $auth->getLastAuthenticationError();
        $lastUsername=$auth->getLastUsername();

        return $this->render('@CherchAppart/Security/login.html.twig', array(
            'last_username' => $lastUsername,
            'error' => $error));
    }
}
