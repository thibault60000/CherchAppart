<?php

namespace CherchAppartBundle\Controller\Contents;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class HomeController extends Controller
{
    public function indexAction()
    {
        return $this->render('@CherchAppart/Homepage/index.html.twig');
    }

}
