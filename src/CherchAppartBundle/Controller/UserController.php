<?php

namespace CherchAppartBundle\Controller;

use CherchAppartBundle\Entity\User;
use CherchAppartBundle\Entity\Role;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * User controller.
 *
 */
class UserController extends Controller
{
    /**
     * Creates a new user entity.
     *
     */
    public function newAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $roleAdmin = $em->getRepository(Role::class)->findOneBy(array('role' => 'ROLE_ADMINISTRATEUR'));
        $user = new User();
        $form = $this->createForm('CherchAppartBundle\Form\UserType', $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $user->addRole($roleAdmin);
            $em->persist($user);
            $em->flush();

            $this->get('session')->getFlashBag()
                ->add('Info', 'Votre compte a bien été créé');

            return $this->redirectToRoute('login');
        }

        return $this->render('@CherchAppart/Account/create.html.twig', array(
            'user' => $user,
            'form' => $form->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing user entity.
     *
     */
    public function editAction(Request $request, User $user)
    {
        if($this->getUser()!=$user)
            Return new Response("<html><body>Vous n'êtes pas le propiétaire du compte</body></html>");

        $editForm = $this->createForm('CherchAppartBundle\Form\UserType', $user);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            $this->get('session')->getFlashBag()
                ->add('Info', 'Profil modifié avec succès');

            return $this->redirectToRoute('home');
        }

        return $this->render('@CherchAppart/Account/account.html.twig', array(
            'user' => $user,
            'edit_form' => $editForm->createView(),
        ));
    }
}
