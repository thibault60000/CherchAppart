<?php

namespace CherchAppartBundle\Controller\Contents;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class HomeController extends Controller
{
    public function indexAction()
    {
        $csrfToken = $this->has('security.csrf.token_manager')
            ? $this->get('security.csrf.token_manager')->getToken('authenticate')->getValue()
            : null;

        return $this->render('@CherchAppart/Homepage/index.html.twig',array('csrf_token' => $csrfToken));

    }

}

